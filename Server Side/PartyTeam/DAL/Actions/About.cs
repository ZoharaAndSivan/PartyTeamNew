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
        public static AboutData Get()
        {
            using (StreamReader r = new StreamReader("../about.json"))
            {
                string json = r.ReadToEnd();
                AboutData  aboutData = JsonConvert.DeserializeObject<AboutData>(json);
                return aboutData;
            }

        }        
        public static AboutData Put(AboutData about)
        {
            using (StreamWriter w = new StreamWriter("../about.json"))
            {
                string json = JsonConvert.SerializeObject(about, Formatting.Indented);
                w.WriteLine(json);
            }
            return about;
        }
        public static void Delete(int i)
        {
           
        }

      

        public class AboutData
        {
            public string heading;
            public string p1;
        }
    }
}
