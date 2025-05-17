router.get('/', async (req, res) => {
  try {
    // Get all available products
    const products = await Product.find({ status: 'Available' });
    
    // Render the homepage with all products
    // The filtering by tag happens in the template
    res.render('pages/index', { 
      products: products
    });
  } catch (error) {
    console.error('Error loading homepage:', error);
    res.status(500).send('Error loading homepage');
  }
});