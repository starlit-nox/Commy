using Commy.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace Commy.Controllers
{
    [ApiController] // Controllor intitator
    [Route("[controller]")]
    public class CatagoriesController : Controller
    {
        private readonly CommyDBContext _context;

        public CatagoriesController(CommyDBContext context)
        {
            _context = context;
        }

        // This route is to get every catagory
        // https://localhost:7228/Catagories

        [HttpGet] // Get Route
        public async Task<IActionResult> GetCatagories()
        {
            var catagories = await _context.Catagories.ToListAsync();
            return Ok(catagories);
        }

        // This route is to get individual catagories
        // https://localhost:7228/Catagories/id
        // https://localhost:7228/Catagories/1

        [HttpGet("{id}")] // Second Get Route
        public async Task<IActionResult> GetCatagory(int id)
        {
            var catagory = await _context.Catagories.FindAsync(id);
            return Ok(catagory);
        }

        [HttpPost] // Post Route
        public async Task<IActionResult> CreateCatagory(string name, string description)
        {
            Catagory catagory = new Catagory(name, description);
            _context.Catagories.Add(catagory);
            await _context.SaveChangesAsync();
            return Ok(catagory);
        }

        [HttpPut("{id}")] // Put Route
        public async Task<IActionResult> UpdateCatagory(int id, [FromBody] Catagory updatedCatagory) // this is the action method for id
        {
            var existingCatagory = await _context.Catagories.FindAsync(id);

            if (existingCatagory == null)
            {
                return NotFound();
            }
            existingCatagory.Name = updatedCatagory.Name;
            existingCatagory.Description = updatedCatagory.Description;

            await _context.SaveChangesAsync();

            return Ok(existingCatagory);
        }

        [HttpDelete("{id}")] // Delete Route (Not working????)
        public async Task<IActionResult> DeleteCatagory(int id)
        {
            var catagory = await _context.Catagories.FindAsync(id);
            if (catagory == null)
            {
                return NotFound();
            }

            _context.Catagories.Remove(catagory);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
