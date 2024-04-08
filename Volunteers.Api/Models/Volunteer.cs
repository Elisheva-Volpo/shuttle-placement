namespace Volunteers.Models
{
    public class Volunteer
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Address { get; set; }
        public string? Tel { get; set; }
        public bool? IsActive { get; set; } 
        public bool[] WantArr { get; set; }
    }
}
