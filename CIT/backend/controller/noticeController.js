const Notice = require('../models/Notice');
const path = require('path');
const fs = require('fs')


exports.createNotice = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    const newNotice = new Notice({
      filename: file.filename,
      path: file.path,
      size: file.size,
    });

    await newNotice.save();
    res.status(201).json(newNotice);
  } catch (error) {
    console.error('Error creating notice:', error);
    res.status(500).send('Server error');
  }
};

exports.getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    res.status(200).json(notices);
  } catch (error) {
    console.error('Error fetching notices:', error);
    res.status(500).send('Server error');
  }
};

exports.getNoticeById = async (req, res) => {
  try {
    const noticeId = req.params.id;
    const notice = await Notice.findById(noticeId);

    if (!notice) {
      return res.status(404).send('Notice not found');
    }
    res.download(`${__dirname}/../${notice.path}`, (err) => {
      if (err) {
        console.error('Error downloading notice:', err);
        res.status(500).send('Server error');
      }
    });
  } catch (error) {
    console.error('Error fetching notice:', error);
    res.status(500).send('Server error');
  }
}


exports.deleteNotice = async (req, res) => {
  try {
    const noticeId = req.params.id;
    const notice = await Notice.findById(noticeId);

    if (!notice) {
      return res.status(404).send('Notice not found');
    }

    // Delete the file from the filesystem
    fs.unlink(path.resolve(notice.path), async (err) => {
      if (err) {
        console.error('Error deleting file:', err);
        return res.status(500).send('Server error');
      }

      // Delete the notice from the database
      await Notice.findByIdAndDelete(noticeId);
      res.status(200).send('Notice deleted successfully');
    });
  } catch (error) {
    console.error('Error deleting notice:', error);
    res.status(500).send('Server error');
  }
};