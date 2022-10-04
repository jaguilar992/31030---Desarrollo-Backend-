const {exec, execFile, spawn} = require("child_process");

exec("sleep 1; ls -lh", (err, stdout, stderr) => {
  if (err) {
    console.log(`err ${err}`);
  }

  if (stderr) {
    console.log(`stderr ${stderr}}`)
  }

  console.log(`stdout ${stdout}`);
});

execFile(__dirname + "/program.sh", (err, stdout, stderr) => {
  if (err) {
    console.log(`err ${err}`);
  }

  if (stderr) {
    console.log(`stderr ${stderr}}`)
  }

  console.log(`stdout ${stdout}`);
});

const child = spawn("ls", ["-lh"]);

child.stdout.on("data", data => {
  console.log(`stdout: ${data}`);
});

child.stderr.on("data", data => {
  console.log(`stderr: ${data}`);
});

console.log("Hola");