<?php
class Size {
    public $id;
    public $productID;
    public $soluong;
    public $size;
    

    function __construct($id,$productID,$soluong,$size) {
        $this->id = $id; 
        $this->productID = $productID; 
        $this->soluong = $soluong; 
        $this->size = $size; 
    }

}


?>