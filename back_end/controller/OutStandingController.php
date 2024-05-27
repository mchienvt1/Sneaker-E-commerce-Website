<?php
header('Content-Type: application/json; charset=utf-8');
class OutStandingController{
  function list(){
      $outStandingRepository = new OutStandingRepository(); 
      $search = $_GET["search"];
      $outStandingQuantity = $outStandingRepository->fetch();
      $result = json_encode($outStandingQuantity);
      echo ($result);
  }

  function save(){
    $outStandingRepository = new OutStandingRepository(); 

    $productId = $_GET['productId'];
    if($outStandingRepository->save($productId)){
      echo json_decode("true"); 
    } 
    else{
      echo json_decode("false"); 
    }
  }

  function delete(){
    $outStandingRepository = new OutStandingRepository(); 
    $productId = $_GET['productId'];

    if($outStandingRepository->delete($productId)){
      echo json_decode("true"); 
    } 
    else{
      echo json_decode("false"); 
    }
  }
  
} 
?>