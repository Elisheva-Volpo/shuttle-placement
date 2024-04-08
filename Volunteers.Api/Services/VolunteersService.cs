using Volunteers.Models;
namespace Volunteers.Services
{
    public static class VolunteersService
    {
        public static List<Volunteer> VolunteersDB { get;set; }
        static VolunteersService()
        {
            VolunteersDB = new List<Volunteer>
            {
                new() { Id=1,Name= "Shoshi(fromServer)", Address= "Rabbi Akiva 15",Tel= "055-6727826",
                    IsActive= true,WantArr=new bool[7]{true,true,false,true,true,false,true} },
                new() { Id= 2,Name= "Sari(fromServer)", Address= "Rashbi 15", Tel= "055-6765562",
                    IsActive= true, WantArr=new bool[7]{true,true,false,true,true,false,true} },
                new Volunteer{ Id= 3,Name= "Rivki(fromServer)", Address= "Rabbi Akiva 150", Tel= "055-6799793",
                    IsActive= true,  WantArr=new bool[7]{false,true,false,true,true,false,true} },
                new Volunteer{ Id= 4,Name= "Racheli(fromServer)", Address="Rabbi Akiva 165", Tel= "0504105353",
                    IsActive= false, WantArr= new bool[7]{true,false,false,true,true,true,true}},
                new Volunteer{ Id= 5,Name= "Zipoire(fromServer)", Address="Rabbi Yehuda Hanasi 35", Tel= "0556799793",
                    IsActive= true, WantArr= new bool[7]{true,true,true,true,true,true,true}}
            };

        }
        
            public static List<Volunteer> GetAll() {
              return VolunteersDB; 
              Console.WriteLine(VolunteersDB[1].WantArr[0]); 
            } 

            public static void Update(Volunteer volunteer)
            {
                var index = VolunteersDB.FindIndex(v => v.Id == volunteer.Id);
                if (index == -1)
                    return;

                VolunteersDB[index] = volunteer;

            }

            public static Volunteer GetById(int id){
                return VolunteersDB.FirstOrDefault(v=>v.Id==id);
            }

        }
    } 