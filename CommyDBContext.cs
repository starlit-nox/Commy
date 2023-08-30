using Commy.Models;
using Microsoft.EntityFrameworkCore;

namespace Commy
{
    public class CommyDBContext : DbContext
    {
        public CommyDBContext(DbContextOptions<CommyDBContext> options) : base(options) { }

        public DbSet<Catagory> Catagories { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Catagory>().HasData(new Catagory
            {
                Id = 1,
                Name = "Automotive",
                Description = "Accessories for cars."
            });

            modelBuilder.Entity<Catagory>().HasData(new Catagory
            {
                Id = 2,
                Name = "Clothes",
                Description = "Items to wear."
            });

            modelBuilder.Entity<Catagory>().HasData(new Catagory
            {
                Id = 3,
                Name = "Electronics",
                Description = "Electrical items."
            });

            modelBuilder.Entity<Catagory>().HasData(new Catagory
            {
                Id = 4,
                Name = "Groceries",
                Description = "Food"
            });

            modelBuilder.Entity<Catagory>().HasData(new Catagory
            {
                Id = 5,
                Name = "Home Appliances",
                Description = "Things for the home."
            });

            modelBuilder.Entity<Catagory>().HasData(new Catagory
            {
                Id = 6,
                Name = "Jewelry",
                Description = "Accessories to wear."
            });

            modelBuilder.Entity<Product>().HasOne<Catagory>().WithMany(c => c.Products).HasForeignKey(p => p.CatagoryID);
        }
    }
}
