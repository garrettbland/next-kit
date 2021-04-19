/**
 * Default Next.js API route that comes with the 'create-next-app' command
 * Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 */

export default (req, res) => {
    res.status(200).json({ name: 'John Doe' })
}
