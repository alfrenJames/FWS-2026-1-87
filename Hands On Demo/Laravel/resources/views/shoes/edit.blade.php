@extends('app')

@section('content')

<form action="{{ route('shoes.update',
$shoe->id) }}" method="POST">

    @csrf
    @method('PUT')

    <input type="text" name="shoe_name" value="{{ $shoe->shoe_name }}" class="form-control mb-2">

    <input type="text" name="brand" value="{{ $shoe->brand }}" class="form-control mb-2">

    <input type="text" name="category" value="{{ $shoe->category }}" class="form-control mb-2">

    <input type="number" step="0.5" name="size" value="{{ $shoe->size }}" class="form-control mb-2">

    <input type="number" name="quantity" value="{{ $shoe->quantity }}" class="form-control mb-2">

    <input type="number" step="0.01" name="price" value="{{ $shoe->price }}" class="form-control mb-2">

    <button class="btn btn-primary">
        Update
    </button>

</form>

@endsection