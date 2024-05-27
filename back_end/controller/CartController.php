<?php 
header('Content-Type: application/json; charset=utf-8');
class CartController {
    function list() {
        $cartRepository = new CartRepository();
        $search = "";
        if (!empty($_GET["search"])) {
            $search = $_GET["search"];
            $cart = $cartRepository->getBySearch($search);
        }
        else {
            $cart = $cartRepository->getAll();
        }
        $carts=json_encode($cart);
        echo ($carts);
    }
    function delete() {
        $p_id = $_GET["p_id"];
        $a_id= $_GET["a_id"];
        $size = $_GET["size"];
        $cartRepository = new CartRepository();
        if ( $cartRepository->delete($p_id, $a_id, $size)) {
            echo json_encode("true");
            $_SESSION["success"] = "Đã xóa sản phẩm";
        }
        else {
            $_SESSION["error"] =  $cartRepository->error;
        }
    }
    function save() {
        $data = json_decode(file_get_contents("php://input"));
        
        $cartRepository = new CartRepository();
        // if ($cartRepository->productExistsInCart($data->p_id, $data->a_id, $data->size)) {
        //     // Product exists, update quantity
        //     if ($cartRepository->updateProductQuantity($data->a_id, $data->p_id, $data->sl, $data->size)) {
        //         echo json_encode("true");
        //         $_SESSION["success"] = "Số lượng sản phẩm đã được cập nhật trong giỏ hàng";
        //     } else {
        //         $_SESSION["error"] = "Không thể cập nhật số lượng sản phẩm";
        //     }
        // } else {
        // }
        if ($cartRepository->save($data)) {
            echo json_encode("true");
            $_SESSION["success"] = "Đã thêm sản phẩm vào giỏ hàng thành công";
        } else {
            $_SESSION["error"] = $cartRepository->error;
        }
    }   

    function plus() {
        $p_id = $_GET["p_id"];
        $a_id= $_GET["a_id"];
        $size = $_GET["size"]; 
        $cartRepository = new CartRepository();
        if ( $cartRepository->updateProductQuantity($a_id,$p_id,1, $size)) {
            echo json_encode("true");
            $_SESSION["success"] = "Đã xóa sản phẩm";
        }
        else {
            $_SESSION["error"] =  $cartRepository->error;
        }

    }

    function minus() {
        $p_id = $_GET["p_id"];
        $a_id= $_GET["a_id"];
        $size = $_GET["size"];
        $cartRepository = new CartRepository();
        if ( $cartRepository->decreaseProductQuantity($a_id,$p_id, $size)) {
            echo json_encode("true");
            $_SESSION["success"] = "Đã xóa sản phẩm";
        }
        else {
            $_SESSION["error"] =  $cartRepository->error;
        }

    }

    function update(){
        $data = json_decode(file_get_contents("php://input"));
        $cartRepository = new CartRepository();

        if ($cartRepository->productExistsInCart($data->p_id, $data->a_id, $data->size)) {
            // Product exists, update quantity
            if ($cartRepository->update($data)) {
                echo json_encode("true");
                $_SESSION["success"] = "Giỏ hàng đã được cập nhật";
            } else {
                echo json_encode("false");
                $_SESSION["error"] = $cartRepository->error;
            }
        } else {
            echo json_encode("false");
            $_SESSION["error"] = "Không tồn tại trong giỏ hàng";
        }
    }

}

?>