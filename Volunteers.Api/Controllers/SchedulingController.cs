using Microsoft.AspNetCore.Mvc;
using Volunteers.Services;
using Volunteers.Models;
namespace Volunteers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SchedulingController : ControllerBase
    {

        [HttpGet]
        public Volunteer[] Get()
        {
            return SchedulingService.Get();
        }

        

        [HttpPut]
        public Volunteer[] Put([FromBody] Volunteer[] updated)
        {
           SchedulingService.Update(updated);
           return updated;
        }

       
    }
}
