<?php
$active = true;

$count = 44;

$name = "Joe";

print('Hello, my name is $name!');
print('<br>');
print("Hello, my name is $name!");
print('<br>');
//arrays
$numbers = array(5,3,96,87,7,4,8,8,4,1);
$num2 = [4,5,6];

print_r($numbers);
print('<br>');
print_r($num2);

//stdClass

$user = new stdClass;
$user->name = 'Teddy';
$user->age  = '55';

print_r('<br>');
print_r($user);


// command structures

if($active){
    print('<br>user is active');
}else{
    print('<br>user is inactive');
}

//loops

for ($i=0; $i < count($numbers); $i++) { 
    print('<br>'.$numbers[$i]);
}

foreach ($user as $key => $value) {
    print('<br>'.$key.': '.$value);
}

?>