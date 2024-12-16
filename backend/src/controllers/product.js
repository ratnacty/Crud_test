import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();



// get All Product

export const getAllProduct = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    
    const pageInt = parseInt(page, 10);
    const limitInt = parseInt(limit, 10);

    const skip = (pageInt - 1) * limitInt;

    try {
        const products = await prisma.product.findMany({
            take: limitInt,
            skip: skip,
        });

        const totalProducts = await prisma.product.count();

        const totalPages = Math.ceil(totalProducts / limitInt);

        // Create pagination info
        const pagination = {
            current_page: pageInt,
            total_pages: totalPages,
            total_data: totalProducts,
            next_page: pageInt < totalPages ? pageInt + 1 : null,
            previous_page: pageInt > 1 ? pageInt - 1 : null,
        };

        res.status(200).json({
            data:({
                pagination: pagination,
                data: products,
            })
            
        });

    } catch (err) {
        console.error("Error fetching products:", err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch products.",
        });
    }
};



// get Product by Id

export const getProductById = async(req, res) => {
    const productId = Number(req.params.id);
    if(isNaN(productId)) {
        res.status(400).json({message: 'Invalid Id'})
        return
    }
    try {
        const product = await prisma.product.findUnique({
            where: {id: Number(productId)}
        })

        if(!product){
            return res.status(404).json({message: "Product not Found"})
        }

        return res.status(200).json({message: "Product found",product})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Failed fetch Product", error})
    }
};



// Create Product

export const createProduct = async(req, res) => {
    const { name, category, price, in_stock, description } = req.body
    const user_id = req.user.id

    console.log(user_id);
    
    if (!name || !category || !price || in_stock === undefined) {
        res.status(400).json({ message: 'Missing required fields' })
        return
      }

    try {
        const newProduct = await prisma.product.create({
            data:{
                name,
                price,
                category,
                in_stock,
                description,
                user_id 

            }
        })
        res.status(200).json({message: "Create product successfull",  newProduct});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Something when wrong, failed create product", error})
    }
};



// Update Product

export const updateProduct = async(req, res) => {
    const productId = req.params.id
    const user_id = req.user.id
    const {name, price, category, description, in_stock} = req.body;

    if (!name || !category || !price) {
        res.status(400).json({ message: 'Missing required fields' })
        return
      }
        
      if (isNaN(productId)) {
        res.status(400).json({ message: 'Invalid ID' })
        return
      }

    try {
        const updatedProduct = await prisma.product.update({
            where: { id: Number(productId) },
            data:{
                name,
                price,
                category,
                description,
                in_stock,
                user_id
               
            }
        });
        return res.status(200).json({message: "Product Update SuccessFully", updatedProduct})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Failed update product", error})
    }


};

// Search Product
export const searchProduct = async(req, res) => {
  
    const { query } = req.query

    const {page = 1, limit = 5 } = req.query  
    const skip = ( page - 1 ) * limit

    const search = await prisma.product.findMany({
     
        where: {
            OR:[
                {category: {contains:query}},
                {description: {contains:query}},
                {name: {contains:query}}
                
            ]
           
        },
        take: parseInt(limit),
        skip:skip,
      
      })

       // information total data
    const result = await prisma.product.count({
      where: {
        OR:[
            {category: {contains:query}},
            {description: {contains:query}},
            {name: {contains:query}}
            
        ]
       
    },
    }) 
    // generated total page 
    const totalPage = Math.ceil(result / limit)

    res.status(200).json({
      current_page: page-0,
      total_page: totalPage,
      total_data: result,
      data: search
    })

}


// Delete Product

export const deleteProduct = async(req, res) => {
    const productId = Number(req.params.id);

    if (isNaN(productId)) {
        res.status(400).json({ message: 'Invalid ID' })
        return
      }

    try {
        const deletedProduct = await prisma.product.delete({
            where: {id: Number(productId)}
        })
        return res.status(200).json({message: "Deleted Product Successfully", deletedProduct})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Not found", error})
        
    }
}

