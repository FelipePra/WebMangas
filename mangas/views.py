from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import boto3


@api_view(['GET', 'POST'])
def mangas(request):
    db = boto3.resource('dynamodb')
    table = db.Table('Mangas')
    if request.method == 'GET':
        mangas = table.scan()
        return Response({'Mangas': mangas.get('Items'), })
    elif request.method == 'POST':
        try:
            table.put_item(Item=request.data)
            return Response(status=status.HTTP_201_CREATED)
        except:
            return Response({'error': 'Failed to insert'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET','PUT','DELETE'])       
def manga(request, Nombre):
    db = boto3.resource('dynamodb')
    table = db.Table('Mangas')
    if request.method == 'GET':
        mangas = table.get_item(Key={'Nombre':Nombre})

        if (mangas.get('Item') is not None):
            return Response({'Mangas': mangas.get('Item')})
        else:
            return Response(status= status.HTTP_404_NOT_FOUND)
        
    if request.method == 'PUT':
        try:
            table.put_item(Item=request.data)
            return Response(status=status.HTTP_200_OK)
        except:
            return Response({'error': 'Failed to update'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    if request.method == 'DELETE':
        table.delete_item(Key={'Nombre':Nombre})
        return Response(status=status.HTTP_200_OK)