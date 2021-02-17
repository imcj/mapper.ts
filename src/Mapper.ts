
export default class Mapper {
    from<T>(objects: any, type: { new(): T;}): T {
        return objects.map((obj: any) => this.single<T>(obj, type));
    }

    single<T>(object: any, type: { new(): T;}): T {
        return new type();
    }
}