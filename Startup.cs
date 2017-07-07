using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CPEProfiler.Startup))]
namespace CPEProfiler
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
