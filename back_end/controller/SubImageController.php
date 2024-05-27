<?php
header('Content-Type: application/json; charset=utf-8');
class SubImageController{
    function list(){
        $subImageRepository = new SubImageRepository(); 
        $search = $_GET["search"];
        $subImageQuantity = $subImageRepository->getBySearch($search);
        $result = json_encode($subImageQuantity);
        echo ($result);
    }
    function update() {
        $data = json_decode(file_get_contents("php://input"));
        $subImageRepository = new SubImageRepository(); 
            
        if ($subImageRepository->update($data)) {
            echo json_encode("true");
            $_SESSION["success"] = "Cập nhật ảnh sản phẩm thành công !!";
        } else {
            $_SESSION["error"] = $subImageRepository->error;
        }
    }   
    function delete() {
        $data = json_decode(file_get_contents("php://input"));
        $subImageRepository = new SubImageRepository(); 
            
        if ($subImageRepository->delete($data)) {
            echo json_encode("true");
            $_SESSION["success"] = "Xóa ảnh sản phẩm thành công !!";
        } else {
            $_SESSION["error"] = $subImageRepository->error;
        }
    }   
    function save() {
        $data = json_decode(file_get_contents("php://input"));
        $subImageRepository = new SubImageRepository(); 
            
        if ($subImageRepository->save($data)) {
            echo json_encode("true");
            $_SESSION["success"] = "Lưu ảnh sản phẩm thành công !!";
        } else {
            $_SESSION["error"] = $subImageRepository->error;
        }
    }   
}


?>