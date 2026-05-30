@extends('app')

@section('content')

<form action="{{ route('shoes.store') }}" method="POST">

    @csrf

    <input type="text" name="shoe_name" class="form-control mb-2" placeholder="Shoe Name">

    <input type="text" name="brand" class="form-control mb-2" placeholder="Brand">

    <input type="text" name="category" class="form-control mb-2" placeholder="Category">

    <input type="number" step="0.5" name="size" class="form-control mb-2" placeholder="Size">

    <input type="number" name="quantity" class="form-control mb-2" placeholder="Quantity">

    <input type="number" step="0.01" name="price" class="form-control mb-2" placeholder="Price">

    <button class="btn btn-success">
        Save
    </button>

</form>

@endsection