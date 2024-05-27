<?php 
class SubImage {
    public $id;
    public $productID;
    public $img;

    function __construct($id, $productID,$img) {
        $this->id= $id;
        $this->productID = $productID;
        $this->img = $img;
    }

}