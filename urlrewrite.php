<?php
$arUrlRewrite=array (
  0 => 
  array (
    'CONDITION' => '#^/works/([a-z0-9 _-]+).php(\\/?.*)?$#',
    'RULE' => 'ELEMENT_CODE=$1',
    'ID' => '',
    'PATH' => '/works/detail.php',
    'SORT' => 100,
  ),
  1 => 
  array (
    'CONDITION' => '#^/works/(\\/?.*)?$#',
    'RULE' => '',
    'ID' => '',
    'PATH' => '/works/index.php',
    'SORT' => 100,
  ),
);
