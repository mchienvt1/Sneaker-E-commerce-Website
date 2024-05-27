<?php
header('Content-Type: application/json; charset=utf-8');
class NewProductController{
  function list(){
      $newProductRepository = new NewProductRepository(); 
      $search = $_GET["search"];
      $newProductQuantity = $newProductRepository->fetch();
      $result = json_encode($newProductQuantity);
      echo ($result);
  }

  function save(){
    $newProductRepository = new NewProductRepository(); 

    $productId = $_GET['productId'];
    if($newProductRepository->save($productId)){
      echo json_decode("true"); 
    } 
    else{
      echo json_decode("false"); 
    }
  }

  function delete(){
    $newProductRepository = new NewProductRepository(); 
    $productId = $_GET['productId'];

    if($newProductRepository->delete($productId)){
      echo json_decode("true"); 
    } 
    else{
      echo json_decode("false"); 
    }
  }
} 
?>