using Commy.Models;
using Microsoft.AspNetCore.Mvc;

namespace Commy.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ProductsController : Controller
    {
        private readonly CommyDBContext _context;

        public ProductsController(CommyDBContext context)
        {
            _context = context;
        }

        // GET: Products
        [HttpGet]
        public async Task<IEnumerable<Product>> GetProduct()
        {
            var product = _context.Products.ToList();
            return product;
        }


        [HttpPost]

        public async Task<ActionResult> CreateProduct(string Name, string Descriptio, float Price, int CatagoryID)
        {
            Product products = new Product(Name, Descriptio, Price, CatagoryID);
            _context.Products.Add(products);
            _context.SaveChanges();
            return Ok(products);

        }

        [HttpDelete]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            Product ProductToDelete = await _context.Products.FindAsync(id);
            _context.Products.Remove(ProductToDelete);
            _context.SaveChanges();
            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> UpdateProduct(int Id, Product updatedProduct)
        {
            var existingProduct = await _context.Products.FindAsync(Id);
            existingProduct.Name = updatedProduct.Name;
            existingProduct.Description = updatedProduct.Description;
            existingProduct.Price = updatedProduct.Price;
            _context.Products.Update(existingProduct);
            await _context.SaveChangesAsync();

            return Ok(existingProduct);
        }

    }
}

