<?php
class UserRepository
{
    public $error;
    public function getBySearch($search)
    {
        $cond = "id = '$search'";
        $users = $this->fetch($cond);
        return $users;
    }
    public function getAll()
    {
        return $this->fetch();
    }
    public function fetch($cond = null)
    {
        global $conn;
        $sql = "SELECT * FROM account";
        if ($cond) {
            $sql .= " WHERE $cond";
        }
        $result = $conn->query($sql);
        $users = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $user = $row;
                $users[] = $user;
            }
        }
        return $users;
    }

    public function register($data)
    {
        global $conn;
        $username = $data->username;
        $password = md5($data->password);
        $fullname = $data->fullname;
        $email = $data->email;
        $phonenumber = $data->phonenumber;
        $result = mysqli_query($conn, "SELECT * FROM account where username='$username'");
        $num = mysqli_num_rows($result);
        if ($num >= 1) return false;
        if ($username != "" and $password != "") {
            $sql = "INSERT INTO account(username,password,role,fullname ,email, phonenumber) 
            VALUES('$username','$password','user','$fullname',
            '$email','$phonenumber'
            )";
            if ($conn->query($sql)) {
                return true;
            }


            return false;
        }
        return false;
    }

    public function find($id)
    {
        $cond = "id = $id";
        $students = $this->fetch($cond);
        $student = current($students); //lấy student tại vị trí con trỏ
        return $student;
    }




    public function updateInfo($username, $fullname, $email, $phonenumber, $address)
    {
        global $conn;
        $sql = "UPDATE account SET `fullname`='$fullname', `email`='$email', `phonenumber`='$phonenumber', `address`='$address' WHERE `username`= '$username'";
        if ($conn->query($sql)) {
            return true;
        }
        return false;
    }
    public function updateRole($username, $role)
    {
        global $conn;
        $sql = "UPDATE account SET `role`='$role' WHERE `username`= '$username'";
        if ($conn->query($sql)) {
            return true;
        }
        return false;
    }
    public function updatePass($username, $oldPass, $newPass)
    {
        global $conn;
        $selectPass = "SELECT `password` FROM `account` WHERE `username` = '$username'";
        $res = mysqli_query($conn, $selectPass);
        $res = mysqli_fetch_array($res, MYSQLI_NUM);
        $pass = $res[0];
        if ($pass != $oldPass) {
            return false;
        } else {
            $sql = "UPDATE account SET `password`='$newPass' WHERE `username`= '$username'";
            $conn->query($sql);
            return true;
        }
    }
    public function updateUsername($id, $username, $password)
    {
        global $conn;
        $selectPass = "SELECT `password` FROM `account` WHERE `id` = '$id'";
        $res = mysqli_query($conn, $selectPass);
        $res = mysqli_fetch_array($res, MYSQLI_NUM);
        $pass = $res[0];

        if ($pass != $password) {
            return false;
        } else {
            $sql = "UPDATE account SET `username`='$username' WHERE `id`= $id";
            $conn->query($sql);
            return true;
        }
    }
    public function read_single($username)
    {
        global $conn;
        $myArray = [];
        $sql = "SELECT `username`,`password`,`phonenumber`,`address`,`role`,`fullname`,`email`
        FROM `account` WHERE `username`='$username'";
        $result = mysqli_query($conn, $sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                'username' => "{$row['username']}",
                'password' => "{$row['password']}",
                'phonenumber' => "{$row['phonenumber']}",
                'address' => "{$row['address']}",
                'role' => "{$row['role']}",
                'fullname' => "{$row['fullname']}",
                'email' => "{$row['email']}",
            ]);
        }
        return $myArray;
    }
    public function getListOrder($a_id)
    {
        global $conn;
        $myArray = [];
        $selectOrder = "SELECT `id`,`total`,`date`,`status` FROM `orders` WHERE `a_id` = '$a_id'";
        $result = mysqli_query($conn, $selectOrder);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                'id' => "{$row['id']}",
                'total' => "{$row['total']}",
                'date' => "{$row['date']}",
                'status' => "{$row['status']}"
            ]);
        }
        return $myArray;
    }

    public function getCart($username)
    {
        global $conn;
        $myArray = [];
        $selectCart = "SELECT 
                            `p`.`ptitle`, 
                            `p`.`pprice`, 
                            `p`.`pimg`, 
                            `c`.`sl`,
                            (`c`.`sl` * `p`.`pprice`) as `tonggia`
                        FROM 
                            `cart` `c`
                        INNER JOIN 
                            `product` `p` 
                        ON 
                            `c`.`p_id` = `p`.`id`
                        INNER JOIN 
                            `account` `a` 
                        ON 
                            `c`.`a_id` = `a`.`id`
                        WHERE 
                            `a`.`username` = '$username'";
        
        $result = mysqli_query($conn, $selectCart);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                'ptitle' => $row['ptitle'],
                'pprice' => $row['pprice'],
                'pimg' => $row['pimg'],
                'sl' => $row['sl'],
                'tonggia' => $row['tonggia']
            ]);
        }
        
        return $myArray;
    }


    public function getTotalOrder()
    {
        global $conn;
        $myArray = [];
        $select = "SELECT * FROM `orders` ";
        $result = mysqli_query($conn, $select);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                'id' => "{$row['id']}",
                'a_id' => "{$row['a_id']}",
                'total' => "{$row['total']}",
                'billing_address' => "{$row['billing_address']}",
                'date' => "{$row['date']}",
                'status' => "{$row['status']}",
                'note' => "{$row['note']}"
            ]);
        }
        return $myArray;
    }
    public function delete($id)
    {
        global $conn;
        $sql = "DELETE FROM account WHERE username=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" . $conn->error;
        return false;
    }
}
