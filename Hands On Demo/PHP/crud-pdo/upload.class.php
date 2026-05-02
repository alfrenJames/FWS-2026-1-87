<?php
class UploadManager
{
    protected string $uploadDir;
    protected array $allowedExtensions;

    public function __construct(string $uploadDir = 'uploads/', array $allowedExtensions = ['jpg', 'gif', 'png', 'jpeg'])
    {
        $this->uploadDir = rtrim($uploadDir, '/\\') . DIRECTORY_SEPARATOR;
        $this->allowedExtensions = $allowedExtensions;
    }

    public function process(string $inputName = 'uploadedFile', string $buttonName = 'uploadBtn', string $buttonValue = 'Upload'): array
    {
        $result = [
            'success' => false,
            'message' => '',
            'clsMsg' => '',
            'fileName' => ''
        ];

        if (!isset($_POST[$buttonName]) || $_POST[$buttonName] !== $buttonValue) {
            return $result;
        }

        if (empty($_FILES[$inputName]) || $_FILES[$inputName]['error'] !== UPLOAD_ERR_OK) {
            $error = $_FILES[$inputName]['error'] ?? 'No file uploaded';
            $result['message'] = 'There is some error in the file upload. Please check the following error.<br>Error: ' . $error;
            $result['clsMsg'] = '_error';
            return $result;
        }

        $fileTmpPath = $_FILES[$inputName]['tmp_name'];
        $fileName = basename($_FILES[$inputName]['name']);
        $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

        if (!in_array($fileExtension, $this->allowedExtensions, true)) {
            $result['message'] = 'Upload failed. Allowed file types: ' . implode(', ', $this->allowedExtensions);
            $result['clsMsg'] = '_error';
            return $result;
        }

        if (!is_dir($this->uploadDir) && !mkdir($this->uploadDir, 0755, true)) {
            $result['message'] = 'Upload directory is not writable or could not be created.';
            $result['clsMsg'] = '_error';
            return $result;
        }

        $newFileName = $this->uniqueFileName($this->sanitizeFileName($fileName));
        $destPath = $this->uploadDir . $newFileName;

        if (move_uploaded_file($fileTmpPath, $destPath)) {
            $result['success'] = true;
            $result['message'] = 'File is successfully uploaded.';
            $result['clsMsg'] = '_success';
            $result['fileName'] = $newFileName;
        } else {
            $result['message'] = 'There was some error moving the file to upload directory. Please make sure the upload directory is writable by the web server.';
            $result['clsMsg'] = '_error';
        }

        return $result;
    }

    protected function sanitizeFileName(string $fileName): string
    {
        $fileName = preg_replace('/[^A-Za-z0-9_.-]/', '_', $fileName);
        return $fileName ?: 'uploaded_file';
    }

    protected function uniqueFileName(string $fileName): string
    {
        $candidate = $fileName;
        $path = $this->uploadDir . $candidate;
        $counter = 1;

        while (file_exists($path)) {
            $candidate = pathinfo($fileName, PATHINFO_FILENAME) . '_' . $counter . '.' . pathinfo($fileName, PATHINFO_EXTENSION);
            $path = $this->uploadDir . $candidate;
            $counter++;
        }

        return $candidate;
    }
}
?>