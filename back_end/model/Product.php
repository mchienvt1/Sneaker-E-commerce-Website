<?php 
class Product {
    public $id;
    public $ptitle;
    public $rating;
    public $pimg;
    public $pprice;
    public $pgender;
    public $pkind;
    public $sl;
    

    function __construct($id, $ptitle,$rating, $pimg,$pprice,$pgender, $pkind, $sl) {
        $this->id= $id;
        $this->ptitle = $ptitle;
        $this->rating = $rating;
        $this->pimg = $pimg;
        $this->pprice = $pprice;
        $this->pgender = $pgender;
        $this->pkind = $pkind;
        $this->sl = $sl;
    }

}

?>