<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\APIBaseController as APIBaseController;

use App\Post;
use Validator;

class PostAPIController extends APIBaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
       $posts = Post::all('id', 'title', 'body');
        // $posts = Post::latest()->paginate(5);
        return $this->sendResponse($posts->toArray(), 'Posts retrieved successfully.');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = json_decode($request->getContent(), true);
        $post = new POST();
        $post->title = $input['title'];
        $post->body = $input['body'];

        $post->save();
        return $this->sendResponse($post->toArray(), 'Post created successfully');
        //return $this->sendResponse($product->toArray(), 'Product created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post= Post::find($id);
        if (is_null($post)) {
            return $this->sendError('Product not found.');
        }
        return $this->sendResponse($post->toArray(), 'Product retrieved successfully.');
        // return response()->json([
        //     $post->toArray()
        // ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
       
        $post= Post::find($id);
        if (is_null($post)) {
            return $this->sendError('Post not found.');
        }
        $post->title = $input['title'];
        $post->body = $input['body'];
        $post->save();
        //return $this->sendResponse($product->toArray(), 'Product updated successfully.');
        return response()->json([
            'success' => true,
            'message' => 'Post Updated!',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post= Post::find($id);
        if (is_null($post)) {
            return $this->sendError('Product not found.');
        }
//        Product::where('id', $product->id)
//            ->update([
//                'is_delete'=>'0'
//            ]);
        Post::where('id', $post->id)
            ->delete();
        return $this->sendResponse($id, 'Product deleted successfully.');
    }
}
