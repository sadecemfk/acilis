import argparse
import math

allowed_names = {name: getattr(math, name) for name in dir(math) if not name.startswith("__")}

# Add built-in constants
allowed_names.update({"pi": math.pi, "e": math.e})


def evaluate(expression: str):
    """Safely evaluate a mathematical expression using math module functions."""
    return eval(expression, {"__builtins__": {}}, allowed_names)


def main():
    parser = argparse.ArgumentParser(description="Advanced calculator")
    parser.add_argument("expression", nargs="?", help="Expression to evaluate")
    args = parser.parse_args()

    if args.expression:
        try:
            result = evaluate(args.expression)
            print(result)
        except Exception as exc:
            print(f"Error: {exc}")
    else:
        # Interactive mode
        while True:
            try:
                expr = input(">>> ")
            except (EOFError, KeyboardInterrupt):
                print()
                break
            if expr.strip().lower() in {"exit", "quit"}:
                break
            if not expr.strip():
                continue
            try:
                print(evaluate(expr))
            except Exception as exc:
                print(f"Error: {exc}")


if __name__ == "__main__":
    main()
