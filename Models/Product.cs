using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Commy.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
        public double Price { get; set; }

        [ForeignKey("Id")]

        public int CatagoryID { get; set; }

        public Product(string name, string description, double price, int catagoryID)
        {
            Name = name;
            Description = description;
            Price = price;
            CatagoryID = catagoryID;
        }
    }
}
