<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model


{
    use HasFactory;
    protected $fillable = ['name', 'price', 'amount', 'expire'];

    public function totalvalue(){
        $value = "{$this->price}*{$this->amount}";
        return $value;
    }
}
