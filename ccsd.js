var fs = require ("fs");
var service = require ("os-service");

function catcherr(error)
{
    if (error)
	console.trace(error);
}

function testrun()
{
    console.error(new Date().toString());
}

function usage()
{
    console.log("usage: node ccsd --add");
    console.log("       node ccsd --rmv");
    console.log("       node ccsd --run");
    process.exit(-1);
}

if (process.argv[2] == "--add" && process.argv.length >= 3)
{
    console.log("adding ccsd service...");
    service.add("ccsd", catcherr);
    console.log("  done");
}
else if (process.argv[2] == "--remove" && process.argv.length >= 3)
{
    console.log("removing ccsd service...");
    service.remove("ccsd", catcherr);
    console.log("  done");
}
else if (process.argv[2] == "--run")
{
    console.log("running ccsd service...");
    var logStream = fs.createWriteStream (process.argv[1] + ".log");
    service.run(logStream, function() {
	service.stop(0);
	console.log("  stopped");
    });

    // Here is our long running code, simply print a date/time string to
    // our log file
    setInterval(testrun, 1000);
}
else
{
    usage();
}
