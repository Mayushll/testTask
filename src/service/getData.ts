export async function getData(url: string): Promise<any> {
    const response = await fetch(url)
    return await response.json()
}