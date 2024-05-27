<?php
header('Content-Type: application/json; charset=utf-8');
class DiscountController{
  function list(){
      $discountRepository = new DiscountRepository(); 
      $search = $_GET["search"];
      $discountQuantity = $discountRepository->fetch();
      $result = json_encode($discountQuantity);
      echo ($result);
  }

  function save(){
    $discountRepository = new DiscountRepository(); 
    $productId = $_GET['productId'];
    if($discountRepository->save($productId)){
      echo json_decode("true"); 
    } 
    else{
      echo json_decode("false"); 
    }
  }

  function delete(){
    $discountRepository = new DiscountRepository(); 
    $productId = $_GET['productId'];

    if($discountRepository->delete($productId)){
      echo json_decode("true"); 
    } 
    else{
      echo json_decode("false"); 
    }
  }
}   
?>