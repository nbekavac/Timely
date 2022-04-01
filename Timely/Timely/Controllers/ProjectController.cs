using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Timely.Models;

namespace Timely.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ProjectController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                           select Project, Start, Stop, Duration from dbo.Projects";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TimelyAppCon");
            SqlDataReader myReader;
            using(SqlConnection myCon=new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand =new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
                return new JsonResult(table);
            }
        }

        [HttpPost]
        public JsonResult Post(Projects pro)
        {
            string query = @"
                           insert into dbo.Projects values
                           ('"+pro.Project+@"'
                            '"+pro.Start+@"'
                            '"+pro.Stop+@"'
                            '"+pro.Duration+@"'
                           ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TimelyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
                return new JsonResult("Added Succesfully");
            }
        }

        [Route("GetAllProjects")]
        public JsonResult GetAllProjectNames()
        {
            string query = @"
                           select Project from dbo.Projects";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TimelyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
                return new JsonResult(table);
            }
        }

    }
}
