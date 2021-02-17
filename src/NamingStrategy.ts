export default interface NamingStrategy {
    translate(input: String): String;
}