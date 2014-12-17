using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Jsonp.Models;

namespace Jsonp.Controllers
{
    public class CityController : ApiController
    {
        // GET api/values
        public IEnumerable<City> Get()
        {
            var cityList = new List<City>
            {
                new City() { Code = "PNQ", Name = "Pune"},
                new City() { Code = "DEL" , Name = "Delhi"}
            };
            return cityList;
        }
        
        public HttpResponseMessage Get(int id)
        {
            const string result = "alert('Valar Morghulis') ";
            var httpResponseMessage = new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StringContent(result, Encoding.UTF8, "text/javascript")
            };
            return httpResponseMessage;
        }


        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}