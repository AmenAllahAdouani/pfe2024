const Newsletter = require('../model/newsletterModel');
const { sendNewsletterToSubscribers } = require('../service/sendEmails');

class newsletter{
    static async createNewsletter(req, res) {
        const { title, content } = req.body;
    
        try {
            const newsletter = new Newsletter({
                title,
                content
            });
    
            await newsletter.save();
            await sendNewsletterToSubscribers();
    
            res.status(201).json({ message: 'Newsletter created successfully' });
        } catch (error) {
            console.error('Error creating newsletter:', error);
            res.status(500).json({ error: 'An error occurred while creating the newsletter' });
        }
    }
    
    static async getAllNews(_req, res) {
        try { 
            const news = await Newsletter.find();
            res.status(200).json(news);
        } catch (error) {
            console.error('Error fetching trips:', error);
            res.status(400).json({ message: error.message });
        }
    }

    static async deleteNews(req, res) {
        try {
            const deletedNews = await Newsletter.findByIdAndDelete(req.params.id);s
            res.status(200).json({ message: 'News deleted successfully' });
        } catch (error) {
            console.error('Error deleting News:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async sendNews(req, res){
        try {
            const newsletter = await Newsletter.findById(id);
            await sendNewsletterToSubscribers(newsletter);
            
            res.status(200).json({ message: 'Newsletter sent successfully' });
        } catch (error) {
            console.error('Error sending newsletter:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = newsletter;
