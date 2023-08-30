using System.ComponentModel.DataAnnotations;

namespace Commy.Models
{
    public class Catagory
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }

        public List<Product> Products { get; set; }

        // Add a parameterless constructor (required by Entity Framework)
        public Catagory()
        {
        }

        // Add a constructor with parameters
        public Catagory(string name, string description)
        {
            Name = name;
            Description = description;
        }
    }
}
