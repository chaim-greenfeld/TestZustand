import fs from 'fs/promises';

const path = process.env.PATHDATA

export const readData = async (req, res) => {
    try {

        const data = await fs.readFile(path, "utf8")
        const movies = JSON.parse(data)
        res.status(200).json(movies)

    }catch(err) {
        res.status(404).json({error: err})
    }
}