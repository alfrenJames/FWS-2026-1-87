<?php

namespace App\Http\Controllers;

use App\Models\Shoe;
use Illuminate\Http\Request;

class ShoeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $shoes = Shoe::all();
        return view('shoes.index', compact('shoes'));
    }
     
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('shoes.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $validated = $request->validate([
        'shoe_name' => 'required',
        'brand' => 'required',
        'category' => 'required',
        'price' => 'required|numeric',
        'size' => 'required|numeric',
        'quantity' => 'required|integer',
    ]);

    Shoe::create($validated);

    return redirect()->route('shoes.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Shoe $shoe)
    {
  
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Shoe $shoe)
    {
        return view('shoes.edit', compact('shoe'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Shoe $shoe)
    {
         $shoe->update($request->all());
        return redirect()
        ->route('shoes.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Shoe $shoe)
    {
        $shoe->delete();
        return redirect()->route('shoes.index');
    }
}