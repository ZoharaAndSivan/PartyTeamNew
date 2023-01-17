using Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class AboutJSON
    {
        static PartyTeamEntities db = new PartyTeamEntities();
      
        static string path = "C:\\Users\\זוהרה ברקוביץ\\Desktop\\בסיעתא דשמיא פרויקט גמר\\PartyTeamNew\\Server Side\\PartyTeam\\DAL\\Actions\\about.json";
        public static AboutData Get()
        {
            using (StreamReader r = new StreamReader(path)) 
            {
                string json = r.ReadToEnd();
                AboutData  aboutData = JsonConvert.DeserializeObject<AboutData>(json);
                return aboutData;
            }

        }        
        public static AboutData Put(AboutData about)
        {
            using (StreamWriter w = new StreamWriter(path))
            {
                string json = JsonConvert.SerializeObject(about, Formatting.Indented);
                w.WriteLine(json);
            }
            return about;
        }
    }
}
