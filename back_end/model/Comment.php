<?php 
class Comment {
    public $id;
    public $comment;
    public $time;
    public $p_id;
    public $a_id;
    

    function __construct($id,$comment,$time,$p_id, $a_id) {
        $this->id= $id;
        $this->comment = $comment;
        $this->time = $time;
        $this->p_id = $p_id;
        $this->a_id = $a_id;
    }

}

?>