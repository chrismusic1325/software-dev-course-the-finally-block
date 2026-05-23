/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================
*/

function processFile(fileName, fileData) {

  let fileOpen = false;

  try {

    // Validate file name
    if (!fileName) {
      throw new ReferenceError("File name is missing");
    }

    // Validate file data type
    if (typeof fileData !== "string") {
      throw new TypeError("File data must be a string");
    }

    // Validate empty string
    if (fileData.trim() === "") {
      throw new Error("File data cannot be empty");
    }

    // Simulate opening file
    fileOpen = true;
    console.log("Opening file...");

    // Simulate processing
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);

    // Simulate writing
    console.log("Writing data to file...");

    console.log("File processed successfully!");

  } catch (err) {

    console.error(`Error: ${err.message}`);

  } finally {

    // Simulate closing resources
    if (fileOpen) {
      console.log("Closing file handle...");
    }

    console.log("Resources released.");
  }
}


// ============================================
// 🧪 Test Cases
// ============================================

processFile();

processFile("myFile.txt", 42);

processFile("myFile.txt", "");

processFile("myFile.txt", "Hello, world!");

