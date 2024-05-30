export async function fetchProducts(company, category, top, minPrice, maxPrice) {
    try {
        const token = 'eyJhbGcioiJIUzI1NiIsInR5CCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEwODM1MjY4LCJpYXQiOjE3MTA4M YiI6InJhaHVsQGFiYy51ZHUifSwiY29tcGFueU5hbWUiOiJnb@1hcnQiLCJjbGllbnRJRCI6IjM3Ym100TNjLTczZDMtNDd 1YS04Njc1LTIxZjY2ZWY5YjczNSIsImNsaWVudFNlY3JldCI6IkhWSVFCVmJXbVRHRW1hRUQiLCJvd251ck5hbWUiOiJSYW h1bCIsIm93bmVyRW1haWwiiJyYWh1bEBhYmMuZWRlIiwicm9sbE5vIjoiMSJ9.gmk2F736Z7q7EaIGDShc40DKK1zwQ9Up zQ5NjgsImlzcyI6IkFmZm9yZG11ZCIsImpaSI6IjM3Ym100TNjLTcz ZDMtNDdlYS04Njc1LTIxZjY2ZWY5YjczNSIsInN1 3xQ-4Dbsu8A';
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        const response = await fetch(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, requestOptions);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
