<?php 
class Cart {
    public $id;
    public $sl;
    public $a_id;
    public $p_id;
    public $size;
    

    function __construct($id,$sl,$a_id, $p_id, $size) {
        $this->id= $id;
        $this->sl = $sl;
        $this->a_id = $a_id;
        $this->p_id = $p_id;
        $this->size = $size;
    }

}

?>