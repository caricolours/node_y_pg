import pool from '../database/configuracion.js';



export const getPostsModel = async () => {
    const allPost = await pool.query('SELECT * FROM posts')
    console.log(allPost)
    return allPost.rows
};

export const createPostModel = async ({ titulo, img, descripcion, likes }) => {
    const result = await pool.query(
        'INSERT INTO posts (id, titulo, img, description, likes) VALUES (DEFAULT,$1,$2,$3,$4) RETURNING *;',
        [id, titulo, img, descripcion, likes]);
    console.log(result.rows)
    return result.rows[0]

};

export const updatePostModel = async (id, { titulo, img, descripcion, likes }) => {
    const result = await pool.query('UPDATE posts SET titulo=$1, img=$2, description=$3, likes=$4 WHERE id=$5 RETURNING *;',
        [titulo, img, descripcion, likes, id]);
    return result.rows;
};


export const deletePostModel = async (id) => {
    const result = await pool.query('DELETE FROM posts where id=$1;'[id]);
    return result.rows;
}

export const getPostsByIdModel = async (id) => {
    const result = await pool.query('SELECT * FROM posts where id=$1;', [id]);
    return result.rows;
};