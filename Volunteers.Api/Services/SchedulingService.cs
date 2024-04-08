using Volunteers.Models;
using Volunteers.Services;
namespace Volunteers.Services;
public static class SchedulingService
{
    public static Volunteer[]? Schedule { get; set; }
    static SchedulingService() => Schedule = new Volunteer[7]{
        VolunteersService.VolunteersDB[0],
        VolunteersService.VolunteersDB[0],
        VolunteersService.VolunteersDB[4],
        VolunteersService.VolunteersDB[1],
        VolunteersService.VolunteersDB[0],
        VolunteersService.VolunteersDB[3],
        new Volunteer()};
    public static void Update(Volunteer[] updated) => Schedule = updated;
    public static Volunteer[] Get() => Schedule;

}