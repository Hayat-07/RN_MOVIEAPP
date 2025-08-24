import { Client, Databases, Query } from 'react-native-appwrite';

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID;




export const updateSearchCount = async (query: string, movie: Movie) => {
    console.log(`movieeeeee: ${JSON.stringify(movie)}`);
    try {


        const client = new Client()
            .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
            .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

        const database = new Databases(client)


        // console.log(database);

        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [Query.equal('searchTerm', query)])
        console.log(result);

        if (result.documents.length > 0) {
            const document = result.documents[0];
            await database.updateDocument(DATABASE_ID, COLLECTION_ID, document.$id, {
                count: document.count + 1
            });
        } else {
            await database.createDocument(DATABASE_ID, COLLECTION_ID, 'unique()', {
                searchTerm: query,
                count: 1,
                poster_url:`https://image.tmdb.org/t/p/w500${movie.poster_path}`  ,
                movie_id: movie.id,
                title: movie.title,
            });
        }



    } catch (err) {
        console.error(err);
        throw err;
    }


}
