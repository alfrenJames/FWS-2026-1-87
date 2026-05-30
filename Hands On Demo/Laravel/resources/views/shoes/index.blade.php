@extends('app')

@section('content')

<h2>Shoe Inventory</h2>

<a href="{{ route('shoes.create') }}" class="btn btn-primary mb-3">
    Add Shoe
</a>

<div class="row mb-3">
    <div class="col-md-4">
        <input type="text" id="searchName" class="form-control" placeholder="Search Shoe Name">
    </div>

    <div class="col-md-3">
        <input type="text" id="searchBrand" class="form-control" placeholder="Search Brand">
    </div>

    <div class="col-md-3">
        <input type="text" id="searchCategory" class="form-control" placeholder="Search Category">
    </div>
</div>

<table class="table table-bordered mt-3">

    <thead>
        <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Size</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
    </thead>

    <tbody id="shoeTable">

        @foreach($shoes as $shoe)

        <tr>
            <td>{{ $shoe->shoe_name }}</td>
            <td>{{ $shoe->brand }}</td>
            <td>{{ $shoe->category }}</td>
            <td>{{ $shoe->size }}</td>
            <td>{{ $shoe->quantity }}</td>
            <td>{{ number_format($shoe->price, 2) }}</td>

            <td>
                <a href="{{ route('shoes.edit', $shoe->id) }}" class="btn btn-warning btn-sm">
                    Edit
                </a>

                <form action="{{ route('shoes.destroy', $shoe->id) }}" method="POST" style="display:inline">

                    @csrf
                    @method('DELETE')

                    <button class="btn btn-danger btn-sm">
                        Delete
                    </button>
                </form>
            </td>
        </tr>

        @endforeach

    </tbody>

</table>

@endsection