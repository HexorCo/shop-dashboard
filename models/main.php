<?php

class main {

    public function obfucar_text($text){
        $text_obfucado = "";
        for ($i=0; $i < strlen($text); $i++) { 
            switch ($text[$i]) {
                case "a":
                $text_obfucado .= "00";
                break;
                case "b":
                $text_obfucado .= "10";
                break;
                case "c":
                $text_obfucado .= "01";
                break;
                case "d":
                $text_obfucado .= "11";
                break;
                case "e":
                $text_obfucado .= "02";
                break;
                case "f":
                $text_obfucado .= "20";
                break;
                case "g":
                $text_obfucado .= "22";
                break;
                case "h":
                $text_obfucado .= "03";
                break;
                case "i":
                $text_obfucado .= "30";
                break;
                case "j":
                $text_obfucado .= "33";
                break;
                case "k":
                $text_obfucado .= "04";
                break;
                case "l":
                $text_obfucado .= "40";
                break;
                case "m":
                $text_obfucado .= "44";
                break;
                case "n":
                $text_obfucado .= "05";
                break;
                case "ñ":
                $text_obfucado .= "50";
                break;
                case "o":
                $text_obfucado .= "55";
                break;
                case "p":
                $text_obfucado .= "60";
                break;
                case "q":
                $text_obfucado .= "06";
                break;
                case "r":
                $text_obfucado .= "66";
                break;
                case "s":
                $text_obfucado .= "70";
                break;
                case "t":
                $text_obfucado .= "07";
                break;
                case "u":
                $text_obfucado .= "77";
                break;
                case "v":
                $text_obfucado .= "80";
                break;
                case "w":
                $text_obfucado .= "08";
                break;
                case "x":
                $text_obfucado .= "88";
                break;
                case "y":
                $text_obfucado .= "90";
                break;
                case "z":
                $text_obfucado .= "09";
                break;
                case " ":
                $text_obfucado .= "99";
                break;
                case "A":
                $text_obfucado .= "91";
                break;
                case "B":
                $text_obfucado .= "19";
                break;
                case "C":
                $text_obfucado .= "92";
                break;
                case "D":
                $text_obfucado .= "29";
                break;
                case "E":
                $text_obfucado .= "93";
                break;
                case "F":
                $text_obfucado .= "39";
                break;
                case "G":
                $text_obfucado .= "94";
                break;
                case "H":
                $text_obfucado .= "49";
                break;
                case "I":
                $text_obfucado .= "95";
                break;
                case "J":
                $text_obfucado .= "59";
                break;
                case "K":
                $text_obfucado .= "96";
                break;
                case "L":
                $text_obfucado .= "69";
                break;
                case "M":
                $text_obfucado .= "97";
                break;
                case "N":
                $text_obfucado .= "79";
                break;
                case "O":
                $text_obfucado .= "98";
                break;
                case "P":
                $text_obfucado .= "89";
                break;
                case "Q":
                $text_obfucado .= "81";
                break;
                case "R":
                $text_obfucado .= "18";
                break;
                case "S":
                $text_obfucado .= "82";
                break;
                case "T":
                $text_obfucado .= "28";
                break;
                case "U":
                $text_obfucado .= "83";
                break;
                case "V":
                $text_obfucado .= "38";
                break;
                case "W":
                $text_obfucado .= "84";
                break;
                case "X":
                $text_obfucado .= "48";
                break;
                case "Y":
                $text_obfucado .= "85";
                break;
                case "Z":
                $text_obfucado .= "58";
                break;
                case ":":
                $text_obfucado .= "86";
                break;
                case "/":
                $text_obfucado .= "68";
                break;
                case ".":
                $text_obfucado .= "87";
                break;
                case "-":
                $text_obfucado .= "78";
                break;
                case "_":
                $text_obfucado .= "71";
                break;
                case "1":
                $text_obfucado .= "17";
                break;
                case "2":
                $text_obfucado .= "72";
                break;
                case "3":
                $text_obfucado .= "27";
                break;
                case "4":
                $text_obfucado .= "73";
                break;
                case "5":
                $text_obfucado .= "37";
                break;
                case "6":
                $text_obfucado .= "74";
                break;
                case "7":
                $text_obfucado .= "47";
                break;
                case "8":
                $text_obfucado .= "75";
                break;
                case "9":
                $text_obfucado .= "57";
                break;
                case "0":
                $text_obfucado .= "76";
                break;
                case "?":
                $text_obfucado .= "67";
                break; // nuevp
                case ",":
                $text_obfucado .= "61";
                break;
                case ".":
                $text_obfucado .= "16";
                break;
                case "$":
                $text_obfucado .= "62";
                break;
                case '"':
                $text_obfucado .= '26';
                break;
                case "!":
                $text_obfucado .= "63";
                break;
                case "%":
                $text_obfucado .= "36";
                break;
                case "(":
                $text_obfucado .= "64";
                break;
                case ")":
                $text_obfucado .= "46";
                break;
                case "=":
                $text_obfucado .= "65";
                break;
                case "[":
                $text_obfucado .= "56";
                break;
                case "]":
                $text_obfucado .= "51";
                break;
                case "{":
                $text_obfucado .= "15";
                break;
                case "}":
                $text_obfucado .= "52";
                break;
                case ":":
                $text_obfucado .= "25";
                break;
                case ";":
                $text_obfucado .= "53";
                break;
                case "@":
                $text_obfucado .= "35";
                break;
                case "~":
                $text_obfucado .= "54";
                break;
                case "<":
                $text_obfucado .= "45";
                break;
                case "\ ".replace(" ",""):
                $text_obfucado .= "41";
                break;
                case "|":
                $text_obfucado .= "14";
                break;
                case "#":
                $text_obfucado .= "42";
                break;
                case "§":
                $text_obfucado .= "24";
                break;
                case "'":
                $text_obfucado .= "43";
                break;
                case "·":
                $text_obfucado .= "34";
                break;
                case "+":
                $text_obfucado .= "31";
                break;
                case "`":
                $text_obfucado .= "13";
                break;
                case "Ç":
                $text_obfucado .= "32";
                break;
                case "ç":
                $text_obfucado .= "23";
                break;
                case ">":
                $text_obfucado .= "21";
                break;
                case "&":
                $text_obfucado .= "12";
                break;
            }
        }

        return $text_obfucado;
    }
    public function de_obfucar_text($text){
        $text_obfucado = "";
        for ($i=0; $i < strlen($text); $i+=2) { 
            switch ($text[$i].$text[$i+1]) {
                case "00":
                $text_obfucado .= "a";
                break;
                case "10":
                $text_obfucado .= "b";
                break;
                case "01":
                $text_obfucado .= "c";
                break;
                case "11":
                $text_obfucado .= "d";
                break;
                case "02":
                $text_obfucado .= "e";
                break;
                case "20":
                $text_obfucado .= "f";
                break;
                case "22":
                $text_obfucado .= "g";
                break;
                case "03":
                $text_obfucado .= "h";
                break;
                case "30":
                $text_obfucado .= "i";
                break;
                case "33":
                $text_obfucado .= "j";
                break;
                case "04":
                $text_obfucado .= "k";
                break;
                case "40":
                $text_obfucado .= "l";
                break;
                case "44":
                $text_obfucado .= "m";
                break;
                case "05":
                $text_obfucado .= "n";
                break;
                case "50":
                $text_obfucado .= "ñ";
                break;
                case "55":
                $text_obfucado .= "o";
                break;
                case "60":
                $text_obfucado .= "p";
                break;
                case "06":
                $text_obfucado .= "q";
                break;
                case "66":
                $text_obfucado .= "r";
                break;
                case "70":
                $text_obfucado .= "s";
                break;
                case "07":
                $text_obfucado .= "t";
                break;
                case "77":
                $text_obfucado .= "u";
                break;
                case "80":
                $text_obfucado .= "v";
                break;
                case "08":
                $text_obfucado .= "w";
                break;
                case "88":
                $text_obfucado .= "x";
                break;
                case "90":
                $text_obfucado .= "y";
                break;
                case "09":
                $text_obfucado .= "z";
                break;
                case "99":
                $text_obfucado .= " "; // ESPACIO
                break;
                case "91":
                $text_obfucado .= "A";
                break;
                case "19":
                $text_obfucado .= "B";
                break;
                case "92":
                $text_obfucado .= "C";
                break;
                case "29":
                $text_obfucado .= "D";
                break;
                case "93":
                $text_obfucado .= "E";
                break;
                case "39":
                $text_obfucado .= "F";
                break;
                case "94":
                $text_obfucado .= "G";
                break;
                case "49":
                $text_obfucado .= "H";
                break;
                case "95":
                $text_obfucado .= "I";
                break;
                case "59":
                $text_obfucado .= "J";
                break;
                case "96":
                $text_obfucado .= "K";
                break;
                case "69":
                $text_obfucado .= "L";
                break;
                case "97":
                $text_obfucado .= "M";
                break;
                case "79":
                $text_obfucado .= "N";
                break;
                case "98":
                $text_obfucado .= "O";
                break;
                case "89":
                $text_obfucado .= "P";
                break;
                case "81":
                $text_obfucado .= "Q";
                break;
                case "18":
                $text_obfucado .= "R";
                break;
                case "82":
                $text_obfucado .= "S";
                break;
                case "28":
                $text_obfucado .= "T";
                break;
                case "83":
                $text_obfucado .= "U";
                break;
                case "38":
                $text_obfucado .= "V";
                break;
                case "84":
                $text_obfucado .= "W";
                break;
                case "48":
                $text_obfucado .= "X";
                break;
                case "85":
                $text_obfucado .= "Y";
                break;
                case "58":
                $text_obfucado .= "Z";
                break;
                case "86":
                $text_obfucado .= ":";
                break;
                case "68":
                $text_obfucado .= "/";
                break;
                case "87":
                $text_obfucado .= ".";
                break;
                case "78":
                $text_obfucado .= "-";
                break;
                case "71":
                $text_obfucado .= "_";
                break;
                case "17":
                $text_obfucado .= "1";
                break;
                case "72":
                $text_obfucado .= "2";
                break;
                case "27":
                $text_obfucado .= "3";
                break;
                case "73":
                $text_obfucado .= "4";
                break;
                case "37":
                $text_obfucado .= "5";
                break;
                case "74":
                $text_obfucado .= "6";
                break;
                case "47":
                $text_obfucado .= "7";
                break;
                case "75":
                $text_obfucado .= "8";
                break;
                case "57":
                $text_obfucado .= "9";
                break;
                case "76":
                $text_obfucado .= "0";
                break;
                case "67":
                $text_obfucado .= "?";
                break; // nuevp
                case "61":
                $text_obfucado .= ",";
                break;
                case "16":
                $text_obfucado .= ".";
                break;
                case "62":
                $text_obfucado .= "$";
                break;
                case "26":
                $text_obfucado .= '"';
                break;
                case "63":
                $text_obfucado .= "!";
                break;
                case "36":
                $text_obfucado .= "%";
                break;
                case "64":
                $text_obfucado .= "(";
                break;
                case "46":
                $text_obfucado .= ")";
                break;
                case "65":
                $text_obfucado .= "=";
                break;
                case "56":
                $text_obfucado .= "[";
                break;
                case "51":
                $text_obfucado .= "]";
                break;
                case "15":
                $text_obfucado .= "{";
                break;
                case "52":
                $text_obfucado .= "}";
                break;
                case "25":
                $text_obfucado .= ":";
                break;
                case "53":
                $text_obfucado .= ";";
                break;
                case "35":
                $text_obfucado .= "@";
                break;
                case "54":
                $text_obfucado .= "~";
                break;
                case "45":
                $text_obfucado .= "<";
                break;
                case "14":
                $text_obfucado .= "|";
                break;
                case "42":
                $text_obfucado .= "#";
                break;
                case "24":
                $text_obfucado .= "§";
                break;
                case "43":
                $text_obfucado .= "'";
                break;
                case "34":
                $text_obfucado .= "·";
                break;
                case "31":
                    $text_obfucado .= "+";
                break;
                case "13":
                $text_obfucado .= "`";
                break;
                case "32":
                $text_obfucado .= "Ç";
                break;
                case "23":
                $text_obfucado .= "ç";
                break;
                case "21":
                $text_obfucado .= ">";
                break;
                case "12":
                $text_obfucado .= "&";
                break;
            
            
            
            
            
            
            }
        }

        return $text_obfucado;
    }
    public function randomNumber($n){        
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randomString = '';  
        for ($i = 0; $i < $n; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $randomString .= $characters[$index];
        }      
        return $randomString;
    }

    public function get_access($ip){
        $main = new Main();
        try{
            $db = new DB();
            $dbu = $db->getDB();
            $user = $dbu->prepare("SELECT * FROM maintenance WHERE access_ip = :ip");
            $user->execute(['ip' => $main->obfucar_text($ip)]);
            return $user->fetch();
          }catch(Exception $e){
            die($e->getMessage());
        }
    }

    
}